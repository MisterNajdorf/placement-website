import React from "react";
import Cardsingle from "./cardsingle";

const Testimonial = () => {
  const data = [
    {
      name: "Manas Ranjan Mantri ",
      dept: "Electrical Engineering",
      company: "C-DAC",
      src:"1.PNG",
    },
    {
      name: "Prathamesh G Bange",
      dept: "Mechanical Engineering",
      company: "Metal Power Analytical Pvt. Ltd",
      src:"2.jpeg",
    },
    {
      name: "Shankar Lal Kesarwani",
      dept: "Electrical Engineering",
      company: "C-DAC",
      src:"3.jpg",
    },
    {
      name: "Anusha Adavikottu",
      dept: "Civil Engineering",
      company: "Willis Towers Watson",
      src:"4.jpg",
    },
    {
      name: "Gourav Pandey",
      dept: "Mechanical Engineering",
      company: "Shimizu Corp. India Pvt. Ltd.",
      src:"5.jpeg",
    },
    {
      name: "Ila Thakur",
      dept: "Mechanical Engineering",
      company: "Hitachi India Ltd ",
      src:"6.jpg",
    },
    {
      name: "Harsh Mahajan",
      dept: "Civil Engineering",
      company: "Vastu Housing Finance Corp. Ltd.",
      src:"7.jpg",
    },
    {
      name: "Nikita Jain",
      dept: "Bioscience and Bioengineering",
      company: "Meril Life Sciences Pvt. Ltd.",
      src:"8.jpg",
    },
    {
      name: "Akhilender Jeet Singh",
      dept: "Energy Science and Engineering",
      company: "Adani Green Energy Limited",
      src:"9.jpg",
    },
    {
      name: "Pooja",
      dept: "Chemistry",
      company: "ALLEN Career Institute",
      src:"10.jpg",
    },
    {
      name: "Dinesh Kumar",
      dept: "Civil Engineering",
      company: "Willis Towers Watson",
      src:"11.jpg",
    },
    {
        name: "Parvinder Solanki",
        dept: "Physics",
        company: "QuNu Labs",
        src:"12.jpg",
      },
    {
      name: "Rashi Dhanraj",
      dept: "Chemical Engineering",
      company: "Adani Green Energy Limited",
      src:"13.jpg",
    },
    {
      name: "Chintan Tundia",
      dept: "Computer Science and Engineering",
      company: "Saro Tech Solutions Pvt Ltd.",
      src:"14.jpg",
    },
    {
      name: "Alhad Parashtekar ",
      dept: "Energy Science and Engineering",
      company: "Reliance New Energy",
      src:"15.jpg",
    },
    {
      name: "Karthika M",
      dept: "Chemical Engineering",
      company: "Radiant Heat Exchanger",
      src:"16.jpg",
    },
    {
      name: "Sneha R Iyer",
      dept: "Chemical Engineering",
      company: "Adani Green Energy Limited",
      src:"17.png",
    },
    {
      name: "Vinay Chandrakar",
      dept: "Mechanical Engineering",
      company: "Hitachi India Ltd",
      src:"18.jpg",
    },
    {
      name: "Anand Abhinav",
      dept: "Metallurgical Engineering and Material Science",
      company: "Adani Green Energy Limited",
      src:"19.jpg",
    },
    {
      name: "Shashi Ranjan Singh",
      dept: "Mechanical Engineering",
      company: "ALLEN Career Institute",
      src:"20.jpg",
    },
    {
      name: "Vinay Prasad",
      dept: "Mechanical Engineering",
      company: "Adani Green Energy Limited",
      src:"21.jpg",
    },
    {
      name: "Shiwani Pareek",
      dept: "Metallurgical Engineering and Material Science",
      company: "Adani Green Energy Limited",
      src:"22.jpg",
    },
    {
      name: "Akshay Kumar",
      dept: "Mechanical Engineering",
      company: "ideaForge Technology Pvt. Ltd.",
      src:"23.jpg",
    },
    {
      name: "Saumya Yadav",
      dept: "Bioscience and Bioengineering",
      company: "Vantage Research",
      src:"24.jpg",
    },
    {
      name: "Munagala Meghana",
      dept: " Chemical Engineering",
      company: "StepChange Inc.",
      src:"25.jpg",
    },
    {
      name: "Sagar Patankar",
      dept: " Chemical Engineering",
      company: "ANDRITZ Technologies Private Limited",
      src:"26.jpg",
    },
    {
      name: "Shruti Sawant",
      dept: "Electrical Engineering",
      company: "AVA retail AMRELI TECH PRIVATE LIMITED",
      src:"https://dummyimage.com/302x302",
    },
    {
      name: "Mallikarjun",
      dept: "Metallurgical Engineering and Material Science",
      company: "QuNu Labs",
      src:"https://dummyimage.com/302x302",
    },
    {
      name: "Prabhat Kumar",
      dept: "Mechanical Engineering",
      company: "Meril Life Sciences Pvt. Ltd.",
      src:"29.jpg"
    },
    {
      name: "Rajiv Kumar",
      dept: "Computer Science and Engineering",
      company: "Shopsense Retail Technologies Limited",
      src:"30.jpg",
    },
    {
      name: "Prakash Suthar",
      dept: "Mechanical Engineering",
      company: "SEDEMAC Mechatronics Pvt Ltd",
      src:"31.jpg",
    },
    {
      name: "Justin Jacob",
      dept: "System and Control Engineering",
      company: "Airbus",
      src:"32.jpg",
    },
    {
      name: "Ruchira Bhatt ",
      dept: "Physics",
      company: "Fujitsu Research & Development India",
      src:"33.jpg",
    },
    {
      name: "Sweta Rani",
      dept: " Metallurgical Engineering and Material Science",
      company: "Adani Green Energy Limited",
      src:"34.png",
    },
    {
      name: "Srikant Batna",
      dept: " Metallurgical Engineering and Material Science",
      company: "IR Technology Service Pvt Ltd",
      src:"https://dummyimage.com/302x302",
    },
    {
      name: "Anju Radhakrishnan",
      dept: " Electrical Engineering",
      company: "C-DAC",
      src:"https://dummyimage.com/302x302",
    },
    {
      name: "",
      dept: "",
      company: "",
      src:"https://dummyimage.com/302x302",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center ">
            <Cardsingle
              name={data[0].name}
              dept={data[0].dept}
              company={data[0].company}
              src={data[0].src}
            />
            <Cardsingle
              name={data[1].name}
              dept={data[1].dept}
              company={data[1].company}
              src={data[1].src}
            />
            <Cardsingle
              name={data[2].name}
              dept={data[2].dept}
              company={data[2].company}
              src={data[2].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[3].name}
              dept={data[3].dept}
              company={data[3].company}
              src={data[3].src}
            />
            <Cardsingle
              name={data[4].name}
              dept={data[4].dept}
              company={data[4].company}
              src={data[4].src}
            />
            <Cardsingle
              name={data[5].name}
              dept={data[5].dept}
              company={data[5].company}
              src={data[5].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[6].name}
              dept={data[6].dept}
              company={data[6].company}
              src={data[6].src}
            />
            <Cardsingle
              name={data[7].name}
              dept={data[7].dept}
              company={data[7].company}
              src={data[7].src}
            />
            <Cardsingle
              name={data[8].name}
              dept={data[8].dept}
              company={data[8].company}
              src={data[8].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[9].name}
              dept={data[9].dept}
              company={data[9].company}
              src={data[9].src}
            />
            <Cardsingle
              name={data[10].name}
              dept={data[10].dept}
              company={data[10].company}
              src={data[10].src}
            />
            <Cardsingle
              name={data[11].name}
              dept={data[11].dept}
              company={data[11].company}
              src={data[11].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[12].name}
              dept={data[12].dept}
              company={data[12].company}
              src={data[12].src}
            />
            <Cardsingle
              name={data[13].name}
              dept={data[13].dept}
              company={data[13].company}
              src={data[13].src}
            />
            <Cardsingle
              name={data[14].name}
              dept={data[14].dept}
              company={data[14].company}
              src={data[14].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[15].name}
              dept={data[15].dept}
              company={data[15].company}
              src={data[15].src}
            />
            <Cardsingle
              name={data[16].name}
              dept={data[16].dept}
              company={data[16].company}
              src={data[16].src}
            />
            <Cardsingle
              name={data[17].name}
              dept={data[17].dept}
              company={data[17].company}
              src={data[17].src}
            />
          </div>


          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[18].name}
              dept={data[18].dept}
              company={data[18].company}
              src={data[18].src}
            />
            <Cardsingle
              name={data[19].name}
              dept={data[19].dept}
              company={data[19].company}
              src={data[19].src}
            />
            <Cardsingle
              name={data[20].name}
              dept={data[20].dept}
              company={data[20].company}
              src={data[20].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[21].name}
              dept={data[21].dept}
              company={data[21].company}
              src={data[21].src}
            />
            <Cardsingle
              name={data[22].name}
              dept={data[22].dept}
              company={data[22].company}
              src={data[22].src}
            />
            <Cardsingle
              name={data[23].name}
              dept={data[23].dept}
              company={data[23].company}
              src={data[23].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[24].name}
              dept={data[24].dept}
              company={data[24].company}
              src={data[24].src}
            />
            <Cardsingle
              name={data[25].name}
              dept={data[25].dept}
              company={data[25].company}
              src={data[25].src}
            />
            <Cardsingle
              name={data[26].name}
              dept={data[26].dept}
              company={data[26].company}
              src={data[26].src}
            />
          </div>

          {/*  */}

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[27].name}
              dept={data[27].dept}
              company={data[27].company}
              src={data[27].src}
            />
            <Cardsingle
              name={data[28].name}
              dept={data[28].dept}
              company={data[28].company}
              src={data[28].src}
            />
            <Cardsingle
              name={data[29].name}
              dept={data[29].dept}
              company={data[29].company}
              src={data[29].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center">
            <Cardsingle
              name={data[30].name}
              dept={data[30].dept}
              company={data[30].company}
              src={data[30].src}
            />
            <Cardsingle
              name={data[31].name}
              dept={data[31].dept}
              company={data[31].company}
              src={data[31].src}
            />
            <Cardsingle
              name={data[32].name}
              dept={data[32].dept}
              company={data[32].company}
              src={data[32].src}
            />
          </div>

          <div className="flex flex-wrap -m-4 sm:mb-20 justify-center ">
            <Cardsingle
              name={data[33].name}
              dept={data[33].dept}
              company={data[33].company}
              src={data[33].src}
            />
            <Cardsingle
              name={data[34].name}
              dept={data[34].dept}
              company={data[34].company}
              src={data[34].src}
            />
            <Cardsingle
              name={data[35].name}
              dept={data[35].dept}
              company={data[35].company}
              src={data[35].src}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
