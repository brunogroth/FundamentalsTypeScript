enum StatusEnum {
  Published,
  Draft,
  Disabled,
}

console.log(StatusEnum);

function changeStatus(status: StatusEnum) {
  console.log(status);
}

interface IPost {
  title: String;
  description: string;
  likesCount: number;
  status: StatusEnum;

  changeStatus: (newStatus: StatusEnum) => {
    status: StatusEnum;
  };
}

class Postable implements IPost {
  title: String;
  description: string;
  likesCount: number;
  status: StatusEnum;

  constructor(
    title: string,
    description: string,
    likesCount: number,
    status: StatusEnum
  ) {
    this.title = title;
    this.description = description;
    this.likesCount = likesCount;
    this.status = status;
  }

  changeStatus(newStatus: StatusEnum): { status: StatusEnum } {
    this.status = newStatus;
    return {
      status: this.status,
    };
  }
}

const post = new Postable(
  "Vacations In Rome - Italy",
  "I love this place",
  4.815162342,
  StatusEnum.Published
);

console.log("Before changing status: " + JSON.stringify(post, null, 4));

post.changeStatus(StatusEnum.Disabled);

console.log("After changing status: " + JSON.stringify(post, null, 4));
