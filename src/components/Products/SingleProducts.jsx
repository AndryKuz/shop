import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";

const SingleProducts = () => {
    const { id } = useParams();

    const { data } = useGetProductQuery({ id });
    
  return (
    <div>
      
    </div>
  );
};

export default SingleProducts;