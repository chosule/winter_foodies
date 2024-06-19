"use client";
import { FaStar } from "react-icons/fa";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import review from "../mypage/_lib/reviewMutate";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Form = {
  image: string;
  textarea: string;
};

type Props = {
  store?: string;
};

export default function ReviewModal({ store }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [file, setFile] = useState<File | "">();
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState<Form>({
    image: "",
    textarea: "",
  });
  const { trigger } = review();
  const { data: session } = useSession();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ) => {
    const { name, files, value } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const reviewData = {
      userId: session?.user?.id,
      storeName: decodeURIComponent(store as string),
      rating,
      reviewText: formData.textarea,
      imageUrl: file,
    };
    const formDataToSend = new FormData();
    formDataToSend.append("userId", reviewData.userId as string);
    formDataToSend.append("storeName", reviewData.storeName as string);
    formDataToSend.append("rating", reviewData.rating.toString());
    formDataToSend.append("reviewText", reviewData.reviewText);
    if (file) {
      formDataToSend.append("image", file, file.name);
    }
    try {
      await trigger(formDataToSend);
      alert("리뷰가 등록되었습니다.");
      router.back();
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <form
      className="flex items-center justify-center flex-col gap-[20px] w-[310px]"
      onSubmit={onSubmit}
      encType="multipart/form-data"
    >
      <p className="font-medium text-[20px]">
        {decodeURIComponent(store as string)}
      </p>
      <div className="flex gap-[3px]">
        {[...Array(5)].map((_, index) => (
          <FaStar
            className={`text-[25px] ${
              rating > index ? "text-color-orange" : "text-color-black"
            }`}
            key={index}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>
      <textarea
        className="border w-full rounded-md h-[200px] resize-none p-4"
        placeholder="리뷰를 입력해주세요."
        name="textarea"
        onChange={handleChange}
      />
      <div className="flex gap-[10px] self-start">
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
          className="hidden"
          ref={fileRef}
        />
        <div
          className="border p-3 rounded-md"
          onClick={() => fileRef.current?.click()}
        >
          <CiImageOn style={{ fontSize: "25px", marginLeft: "5px" }} />
          <p className="text-xs">사진등록</p>
        </div>
        {file && (
          <div className="relative">
            <button
              onClick={() => setFile("")}
              className="absolute right-[-16px]"
            >
              <TiDelete className="text-[24px]" />
            </button>
            <Image
              src={URL.createObjectURL(file)}
              alt="파일이미지"
              width={65}
              height={65}
            />
          </div>
        )}
      </div>
      <button
        className="w-full bg-[#dd8037] h-[40px] border rounded-md"
        type="submit"
      >
        <p className="text-color-white font-medium">등록하기</p>
      </button>
    </form>
  );
}
