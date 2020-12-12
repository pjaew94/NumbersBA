import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { IconContext } from "react-icons";
import { FiSearch } from "react-icons/fi";

import "./FilterBar.scss";
import nbaLogo from "../../../media/nba-logo.jpeg";

const FilterBar = () => {
  const [toggleOne, setToggleOne] = useState("player");
  const [toggleTwo, setToggleTwo] = useState("regular");

  const toggleOneFunc = () => {
    if (toggleOne === "player") {
      setToggleOne("team");
    } else {
      setToggleOne("player");
    }
  };

  const toggleTwoFunc = () => {
    if (toggleTwo === "regular") {
      setToggleTwo("playoffs");
    } else {
      setToggleTwo("regular");
    }
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    try {
      data.playerOrTeam = toggleOne;
      data.regularOrPlayoffs = toggleTwo;
      console.log(data);
    } catch (err) {
      console.log(errors);
    }
  };

  const logoContainer = (
    <div className="logo-container">
      <div className="logo-inner">
        <img src={nbaLogo} alt="logo" />
        <h2>umbersBA</h2>
      </div>
    </div>
  );

  const filterForm = (
    <form className="filter-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-field-container">
        <IconContext.Provider value={{ className: "search-icon" }}>
          <FiSearch />
        </IconContext.Provider>
        <input
          className="input-field"
          name="text"
          placeHolder="Enter Player or Team Name"
          ref={register}
        />
      </div>

      <div className="toggler-container">
        <h3 className={`option-1 ${toggleOne === "player" && "highlight"}`}>
          Player
        </h3>
        <div className="toggler" onClick={() => toggleOneFunc()}>
          <div className={`circle ${toggleOne === "team" && "toggled"}`} />
        </div>
        <h3 className={`option-2 ${toggleOne === "team" && "highlight"}`}>
          Team
        </h3>
      </div>

      <div className="toggler-container">
        <h3 className={`option-1 ${toggleTwo === "regular" && "highlight"}`}>
          Regular
        </h3>
        <div className="toggler" onClick={() => toggleTwoFunc()}>
          <div className={`circle ${toggleTwo === "playoffs" && "toggled"}`} />
        </div>
        <h3 className={`option-2 ${toggleTwo === "playoffs" && "highlight"}`}>
          Playoffs
        </h3>
      </div>

      <div className="selector-container">
        <h3>Season :</h3>
        <select name="season-year" ref={register}>
          <option value="2019-2020">2019 - 2020</option>
          <option value="2018-2019">2018 - 2019</option>
          <option value="2017-2018">2017 - 2018</option>
        </select>
      </div>
    </form>
  );
  return (
    <div className="filter-bar-container">
      {logoContainer}
      {filterForm}
    </div>
  );
};

export default FilterBar;
