import Image from "next/image"
import PromptCard from "./PromptCard"

const Profile = ({name,desc,data,handleEdit,handleDelete}) => {

  return (
    <section className="w-full">
      <div className="border-b-8 border-blue-200">
      <div className="flex-row flex mb-3">
      {data?.map((post,index)=> index < 1 &&(
        <Image key={post.creator.id} className="rounded-full border-4 border-gray-500" src={post.creator.image} width={100} height={100}/>  
        ))}
        <h1 className="head_text text-center"><span className="blue_gradient text-transform capitalize">{name}</span></h1>
      </div>
      </div>
      <p className="desc text-left ">{desc}</p>
      <div className="mt-10 prompt_layout ">
      {data.map((post)=>(
        <PromptCard
        key={post.creator._id}
        post={post}
        handleEdit={()=> handleEdit && handleEdit(post)}
        handleDelete={()=> handleDelete && handleDelete(post)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile