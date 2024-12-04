import Image from "next/image"
 type bt={
    name?:string;
    ty?:string;
 }
 
 function Butt(props:bt){
    return(
        <>
            <button className={`${props.ty} rounded-lg  bg-[#4F9CF9] text-white`}>
                <h1 className="font-medium text-base flex items-center justify-center">{props.name}<span className="pl-3 "><Image src={"/picture/arrow.png"} alt="" width={20} height={10}/></span></h1>

            </button>
        </>
    )
 }

 export default Butt