export default function MainlayoutPage({children}:{children:React.ReactNode}) {
     
    return(
        <>
            <div>레이아웃 test</div>
            <section>
                {children}
            </section>
        </>
    )
}