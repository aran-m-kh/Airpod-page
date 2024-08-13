import { InavbarData } from "../types & intefaces/Types&Interfaces"
import { IHeadphoneData } from "../types & intefaces/Types&Interfaces"

import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";

export const navbarData : InavbarData[] = [
    { 
        id : 1,
        title  : "Home",
        link : "/"
    },
    {
        id : 2,
        title : "Categories",
        link : "/categories"
    },
    {
        id : 3,
        title : "Blog",
        link : "/Blog"
    },
    {
        id: 4,
        title : "Contact",
        link : "/Contact"

    }
]

export const HeadPhoneData : IHeadphoneData[] = [
    {
        id: 1,
        imageSrc: Img1,
        title: "Apple AirPods Wireless Over-Ear Headphones",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
        price: "$40.99",
        modal: "AirPods",
        bgColor: "#e85950",
      },
      {
        id: 2,
        imageSrc: Img2,
        title: "Apple AirPods Max Wireless Over-Ear Headphones",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
        price: "$100.00",
        modal: "Max",
        bgColor: "#24b4bc",
      },
      {
        id: 3,
        imageSrc: Img3,
        title: "Apple AirPods Pro Wireless Over-Ear Headphones",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
        price: "$100.00",
        modal: "Pro",
        bgColor: "#7aa10e",
      },
]