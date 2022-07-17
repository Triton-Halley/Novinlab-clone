import classes from "./LatestPostsContainer.module.css";
import Post from "./Post";

import placeholderPic from "../../assets/pics/placeholder.jpg";
const DUMMY_DATA = [
  {
    id: "p1",
    title: "پست یک",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    imageSource: placeholderPic,
    link: "#",
  },
  {
    id: "p2",
    title: "پست دو",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    imageSource: placeholderPic,
    link: "#",
  },
  {
    id: "p3",
    title: "پست سه",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    imageSource: placeholderPic,
    link: "#",
  },
];

const LatestPosts = (props) => {
  return (
    <>
      <div className={classes.LatestPostsContainer}>
        <strong>آخرین مطالب سایت</strong>
        <div className={classes.PostsContainer}>
          {DUMMY_DATA.map((item) => {
            return (
              <Post
                key={item.id}
                title={item.title}
                description={item.description}
                imageSource={item.imageSource}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default LatestPosts;
