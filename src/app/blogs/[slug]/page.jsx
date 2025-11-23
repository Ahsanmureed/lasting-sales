import axios from "axios";
import BlogDetails from "@/components/BlogDetails";

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/api/articles?filters[slug][$eq]=${slug}&populate=*`
    );

    const blog = res.data.data[0];

    if (!blog) {
      return {
        title: "Blog not found | MySite",
        description: "The requested blog could not be found.",
      };
    }

    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        images: [
          {
            url: blog.cover?.url || "/default-og.png",
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description,
        images: [blog.cover?.url || "/default-og.png"],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error | MySite",
      description: "Something went wrong while fetching the blog.",
    };
  }
}

const Page = ({ params }) => {
  return <BlogDetails />;
};

export default Page;
