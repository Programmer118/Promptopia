"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await res.json();

      setPost(data);
    };

    if (session?.user.id) fetchPost();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPost = async() =>{
          const res = await fetch(`api/users/${session?.user.id}/posts`)
          const data = await res.json();
          
          setPost(data);
        }
        filteredPost()
      } catch (error) {
        console.log(error);
      }
    }
  };

  const router = useRouter();
  return (
    <Profile
      name={session?.user.name}
      desc={`Welcome ${session?.user.name}`}
      data={post}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
