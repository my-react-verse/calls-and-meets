

const Card = ({ children }: { children: any }) => {

    return (
        <>
            <div className="bg-white p-5 rounded-2xl">
                {children}
            </div>
        </>
    )

}

export default Card;