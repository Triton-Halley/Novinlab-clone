import classes from "./faq.module.css";
const FaqItem = (props) => {
  let spanIcon = <ion-icon name="add-outline"></ion-icon>;
  let faqStyle = [classes.faqContainer, classes.faqContainerHeightClose];

  if (props.faq.active) {
    faqStyle = [classes.faqContainer, classes.faqContainerHeightOpen];
    spanIcon = <ion-icon name="add-outline"></ion-icon>;
  } else {
    faqStyle = [classes.faqContainer, classes.faqContainerHeightClose];
    spanIcon = <ion-icon name="remove-outline"></ion-icon>;
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
