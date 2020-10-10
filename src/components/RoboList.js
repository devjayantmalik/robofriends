import React, { useState } from "react";
import RoboCard from "./RoboCard";
import { connect } from "react-redux";
import { fetchAll } from "../store/robots/actions";

const RoboList = ({ fetchAll, robots }) => {
  useState(() => {
    fetchAll();
  }, []);
  return (
    <section className="list-robots">
      {robots.map((robot) => (
        <RoboCard key={`${robot.id}`} {...robot} />
      ))}
    </section>
  );
};

const mapStateToProps = ({ robots, search }) => {
  if (search.isSearching) {
    robots = [...search.names, ...search.emails, ...search.ids];
  }
  return { robots: robots };
};

export default connect(mapStateToProps, { fetchAll })(RoboList);
