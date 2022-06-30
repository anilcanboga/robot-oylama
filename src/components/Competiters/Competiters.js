import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVote } from "../storeRedux/CompetiterRedux";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function Competiters() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let competiterArray = useSelector((state) => state.competiter.competiters);

  // Birinciyi aldığımız yer
  const [firstCompetiter, setFirstCompetiter] = useState(null);
  const [competiters, setCompetiters] = useState([]);

  // users tamamen yüklendiğinde işlemleri yapıp ayırıyoruz
  useEffect(() => {
    if (competiterArray.length > 0 && competiterArray[0].vote !== 0) {
      setFirstCompetiter(competiterArray[0]);
      setCompetiters(competiterArray.slice().splice(1, competiterArray.length));
    } else {
      setCompetiters(competiterArray);
    }
  }, [competiterArray]);

  return (
    <>
      <Header></Header>
      {/* birinci arkadaşı bukduğmuzda ekrana bassın yoksa hata atar çünkü öyle biri yok */}
      {firstCompetiter && (
        <div className="firstCompetiter">
          <div className="d_inline_table">
            <div className="">
              <img
                className="robotAvatar"
                src={firstCompetiter.avatar}
                alt=""
                onClick={() => navigate(`/user/${firstCompetiter.id}`)}
              />
              <p
                className="competitersText"
                onClick={() => navigate(`/user/${firstCompetiter.id}`)}
              >
                {firstCompetiter.first_name} {firstCompetiter.last_name} -{" "}
                {firstCompetiter.vote}
              </p>
              <button
                className="voteButton"
                onClick={() => {
                  dispatch(setVote(firstCompetiter.id));
                }}
              >
                Oy Ver
              </button>
            </div>
          </div>
        </div>
      )}

      {competiters.map((competiter, index) => (
        <div className="d_inline_table" key={index}>
          <div className="">
            <img
              className="robotAvatar"
              src={competiter.avatar}
              alt=""
              onClick={() => navigate(`/user/${competiter.id}`)}
            />
            <p
              className="competitersText"
              onClick={() => navigate(`/user/${competiter.id}`)}
            >
              {competiter.first_name} {competiter.last_name} - {competiter.vote}
            </p>
            <button
              className="voteButton"
              onClick={() => {
                dispatch(setVote(competiter.id));
              }}
            >
              Oy Ver
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Competiters;
