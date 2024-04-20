import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ServiceDetails = () => {

  const {id} = useParams();
  
  const [details, setDetails] = useState([])

  console.log(details)

  useEffect(() => {
    fetch('/typeOfService.json')
    .then((res) => res.json())
    .then((data) => {
      const value = data.find((items) => items.id === id)
      setDetails(value)
    })
  },[id])

  return (
    <div>
      <h1>this is service section </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic fuga fugit minima sunt, error architecto odit? Corporis, excepturi dicta. Quos, dignissimos sapiente tenetur fugiat sint vitae accusamus alias quam totam blanditiis harum ipsum delectus temporibus soluta odio, unde, quasi ea qui nulla dicta ab? Enim magni, laboriosam nihil reprehenderit, magnam exercitationem perferendis quis expedita suscipit sit soluta iste impedit tempore numquam quaerat voluptatum tempora odio sunt. Perferendis ducimus, aut ullam alias asperiores rerum! Aut numquam veritatis esse nisi consequatur cupiditate, dignissimos corrupti odio officiis reprehenderit ipsam expedita nobis enim magnam iste rerum accusamus. Laboriosam voluptatem deserunt sunt repellendus beatae reprehenderit.</p>
    </div>
  );
};

export default ServiceDetails;