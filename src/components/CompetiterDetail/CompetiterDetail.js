import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header";

function CompetiterDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const competiterArray = useSelector((state) => state.competiter.competiters);
  let competiter = competiterArray.find((data) => data.id === parseInt(id, 10));

  if (!competiter)
    return (
      <h1>
        Böyle bir kullanıcı yok. Anasayfaya git <br></br>
        <button className="backButton" onClick={() => navigate(`/`)}>
          Anasayfa
        </button>
      </h1>
    );

  let productionDate = competiter.date_of_birth.split("-", 1);
  return (
    <>
      <Header
        title={`${competiter.first_name} ${competiter.last_name}`}
        vote={competiter.vote}
      ></Header>
      <div className="">
        <button className="backButton" onClick={() => navigate(`/`)}>
          Geri
        </button>
        <div className="">
          <img src={competiter.avatar} className="" alt="" />
        </div>
        <div className="">
          <h2 className="titleText">Aldığı oy: {competiter.vote}</h2>
          <div className="competiterDetailBox">
            <div className="property">
              <span>Kodu: </span>
              <span>{competiter.social_insurance_number}</span>
            </div>
            <div className="property">
              <span>Yapım Yılı: </span>
              <span>{productionDate}</span>
            </div>
            <div className="property">
              <span>Görevi: </span>
              <span>{competiter.employment.title}</span>
            </div>
            <div className="property">
              <span>Cinsiyet: </span>
              <span>{competiter.gender}</span>
            </div>
            <div className="property">
              <span>Menşei: </span>
              <span>
                {competiter.address.state} - {competiter.address.country}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompetiterDetail;
