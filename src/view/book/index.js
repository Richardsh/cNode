import React, {Component} from "react";
import {Card} from "antd";
import data from "./data";
import PublicCard from "../public_card";
class Book extends Component {
  render(){
    return (<PublicCard 
      data = {data}
    />)
  }
}

export default Book;