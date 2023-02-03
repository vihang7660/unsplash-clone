import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, incrementPage, setNewImagesTrue } from "./photoSlice";
import { useEffect, useRef } from "react";
import Photo from "./Photo";
import { AppDispatch } from "../../store";

interface State {
  users: {
    photos: any[];
    isLoading: boolean;
    page: number;
    query: string;
    newPicturesAvailable: boolean;
  };
}

export default function PhotosList() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: State) => state.users);
  const { newPicturesAvailable, page, isLoading } = useSelector(
    (state: State) => state.users
  );
  const mounted = useRef(false);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newPicturesAvailable) {
      return;
    }
    if (isLoading) {
      return;
    }
    dispatch(incrementPage());
  }, [newPicturesAvailable]);

  const handleScrollEvent = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      dispatch(setNewImagesTrue());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const photoList = user.photos.map((item) => (
    <Photo key={item.id} url={item.urls.regular} />
  ));

  return <main className="stylesheet pt-14">{photoList}</main>;
}
