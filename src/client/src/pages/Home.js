import Post from "../components/post/Post";

const Home = ({ postData }) => {
  // get the post data from database
  return <>{postData && <Post postData={postData} />}</>;
};

export default Home;
