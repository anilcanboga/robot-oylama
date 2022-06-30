import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVote } from "../storeRedux/CompetiterRedux";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function Competiters() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let competiterArray = useSelector((state) => state.competiter.competiters);

  // Birinci olan çalışanı aldığımız yer
  const [firstCompetiter, setFirstCompetiter] = useState(null);
  const [competiters, setCompetiters] = useState([]);

  // Adaylar tamamen yüklendiğinde işlemleri yapıp, ayırıyoruz
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
      {/* Birinci çalışanı bulduğumuzda ekrana bassın yoksa hata döner çünkü öyle bir kullanıcı yok(random-api) */}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                {firstCompetiter.first_name} {firstCompetiter.last_name} /{" "}
                <span className="voteBox">{firstCompetiter.vote} vote</span>
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
        <div className="dInlineTable" key={index}>
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
              {competiter.first_name} {competiter.last_name} / {competiter.vote}{" "}
              vote
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
