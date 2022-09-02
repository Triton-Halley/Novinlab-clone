import classes from "./faq.module.css";
import { Add, Remove } from "@mui/icons-material";
const FaqItem = (props) => {
  let spanIcon = <Add />;
  let faqStyle = [classes.faqContainer, classes.faqContainerHeightClose];

  if (props.faq.active) {
    faqStyle = [classes.faqContainer, classes.faqContainerHeightOpen];
    spanIcon = <Add />;
  } else {
    faqStyle = [classes.faqContainer, classes.faqContainerHeightClose];
    spanIcon = <Remove />;
  }

  const faqHandler = () => {
    props.onActive(props.faq.id);
  };

  return (
    <div onClick={faqHandler} className={faqStyle.join(" ")}>
      <div className={classes.faqContent}>
        {props.faq?.link ? (
          <p>
            {props.faq.answer}
            {
              <span>
                <a href={props.faq.link}>کلیک </a>کنید
              </span>
            }
          </p>
        ) : (
          <p>{props.faq.answer}</p>
        )}
      </div>
      <div className={classes.faqHeader}>
        <span>{spanIcon}</span>
        <strong>{props.faq.question}</strong>
      </div>
    </div>
  );
};
export default FaqItem;
