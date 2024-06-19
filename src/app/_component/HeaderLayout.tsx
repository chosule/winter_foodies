"use client";
import { useRouter } from "next/navigation";
import StarRating from "./StarRating";
import { FaArrowLeft } from "react-icons/fa";
import heartIcon from "../../../public/img/heart.svg";
import heartFillIcon from "../../../public/img/fillHeart.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";
import getLike from "../(afterLogin)/_lib/getLike";
import { MouseEventHandler } from "react";
import like from "../(afterLogin)/_lib/like";
import unLike from "../(afterLogin)/_lib/unLike";
import { mutate } from "swr";

type Props = {
  headerTitle: string;
  storeRating?: string;
  heart?: boolean;
  storeName?: string;
};

const HeaderLayout = ({
  headerTitle,
  storeRating,
  heart,
  storeName,
}: Props) => {
  const router = useRouter();
  const { data } = useSession();
  const { data: getLikes } = getLike();

  const { trigger: likeTrigger } = like();
  const { trigger: unLikeTrigger } = unLike();

  const liked = !!getLikes?.data?.find((item) => item.storeName === storeName);

  const onLike: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (liked) {
      await unLikeTrigger({ userId: data?.user?.id, storeName });
    } else {
      await likeTrigger({ userId: data?.user?.id, storeName });
    }
    mutate([`${process.env.NEXT_PUBLIC_BASE_URL}/like`, data?.user?.id]);
  };

  return (
    <div className="w-full grid grid-cols-3 items-center h-[77px] relative">
      <button
        onClick={() => {
          router.back();
        }}
      >
        <FaArrowLeft />
      </button>
      <div className="flex items-center justify-center">
        {headerTitle && <p className="text-[20px] font-bold">{headerTitle}</p>}
        {storeRating && <StarRating storeRating={storeRating} />}
        {heart && (
          <button className="absolute right-0" onClick={onLike}>
            {liked ? (
              <Image
                src={heartFillIcon}
                alt="하트아이콘"
                width={20}
                height={20}
              />
            ) : (
              <Image src={heartIcon} alt="하트아이콘" width={20} height={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderLayout;
