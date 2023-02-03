import React from "react";
import { useSelector } from "react-redux";

interface State {
  users: any;
}

interface Props {
  url: string;
}

const Photo: React.FC<Props> = ({ url }) => {
  const photo = useSelector((state: State) => state.users);

  return (
    <div>
      <img src={url} alt="pic" className="flex object-cover w-full h-full" />
    </div>
  );

  
};

export default Photo;
