import { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
  render() {
    if (this.props.campsite) {
      return (
        <div className="row">{this.renderCampsite(this.props.campsite)} </div>
      );
    }
    return <div />;
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>comments</h4>
          {comments.map((comment) => (
            <p key={comment.id}>
              {comment.text}
              <br />
              --{comments.author} ,{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          ))}
        </div>
      );
      return <div />;
    }
  }

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 ">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  render() {
    const { campsite } = this.props;
    return campsite ? (
      <div className="row">
        {this.renderCampsite(this.props.campsite)}{" "}
        {this.renderComments(this.props.campsite.comments)}{" "}
      </div>
    ) : (
      <div />
    );
  }
}
export default CampsiteInfo;
