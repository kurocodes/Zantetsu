import { assets } from "../assets/assets";

export default function ShortIntro() {
  return (
    <div className="w-[90%] xs:w-[60%] mx-auto flex flex-col items-center">
      <img
        src={assets.zantetsu_logo_light}
        alt="Zantetsu Logo"
        className="w-100"
      />

      <p className="text-bgLight font-body text-lg text-center">
        <span className="text-highlight font-bold">ZANTETSU</span> is your
        ultimate destination for{" "}
        <span className="text-highlight">
          premium anime action figures and collectibles
        </span>
        . Forged with passion and detail, we bring you heroes, villains, and
        limited editions that cut through the ordinary. Whether you’re a
        dedicated otaku or a casual fan, ZANTETSU delivers figures as sharp as
        your love for anime.
      </p>
    </div>
  );
}
