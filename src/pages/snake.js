import React, { Component, useState } from "react";
import { useRouter,withRouter } from "next/router";

import img from "../public/img/old-woman.png";

const HEIGHT = 10;
const WIDTH = 10;

// mapping keycode  for changing direction
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const STOP = 32; /* [space] used for pause */

const getRandom = () => {
  return {
    x: Math.floor(Math.random() * WIDTH),
    y: Math.floor(Math.random() * HEIGHT),
  };
};

const emptyRows = () =>
  [...Array(WIDTH)].map((_) => [...Array(HEIGHT)].map((_) => "grid-item"));

const increaseSpeed = (speed) => speed - 10 * (speed > 10);

const initialState = {
  rows: emptyRows(),
  snake: [getRandom()],
  food: getRandom(),
  direction: STOP,
  speed: 250,
};

let score = 0;




export default withRouter(class Snake extends Component {
  


  constructor(props) {
    super();
    this.state = initialState;
  }

  

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.changeDirection;
    document.title = "snake-game";


  }

  componentDidUpdate() {
    this.isCollapsed();
    this.isEaten();
  }

  moveSnake = () => {
    let snakeCopy = [...this.state.snake];
    let head = { ...snakeCopy[snakeCopy.length - 1] };
    switch (this.state.direction) {
      case LEFT:
        head.y += -1;
        break;
      case UP:
        head.x += -1;
        break;
      case RIGHT:
        head.y += 1;
        break;
      case DOWN:
        head.x += 1;
        break;
      default:
        return;
    }
    /* keep the value within range of 0 to HEIGHT */
    head.x += HEIGHT * ((head.x < 0) - (head.x >= HEIGHT));
    head.y += WIDTH * ((head.y < 0) - (head.y >= WIDTH));

    snakeCopy.push(head);
    snakeCopy.shift();
    this.setState({
      snake: snakeCopy,
      head: head,
    });
    this.update();
  };

  isEaten() {
    let snakeCopy = [...this.state.snake];
    let head = { ...snakeCopy[snakeCopy.length - 1] };
    let food = this.state.food;
    if (head.x === food.x && head.y === food.y) {
        
      snakeCopy.push(head);
      this.setState({
        snake: snakeCopy,
        food: getRandom(),
        speed: increaseSpeed(this.state.speed),
      });
    }
  }

  update() {
    let newRows = emptyRows();
    this.state.snake.forEach(
      (element) => (newRows[element.x][element.y] = "snake")
    );
    newRows[this.state.food.x][this.state.food.y] = "food";
    this.setState({ rows: newRows });
  }

  isCollapsed = () => {
    let snake = this.state.snake;
    let head = { ...snake[snake.length - 1] };
    for (let i = 0; i < snake.length - 3; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        this.setState(initialState);
        score = snake.length;
        alert(`game over score: ${score}`);
      }
    }
  };

  changeDirection = ({ keyCode }) => {
    let direction = this.state.direction;
    switch (keyCode) {
      case LEFT:
        direction = direction === RIGHT ? RIGHT : LEFT;
        break;
      case RIGHT:
        direction = direction === LEFT ? LEFT : RIGHT;
        break;
      case UP:
        direction = direction === DOWN ? DOWN : UP;
        break;
      case DOWN:
        direction = direction === UP ? UP : DOWN;
        break;
      case STOP:
        direction = STOP;
        break;
      default:
        break;
    }
    this.setState({
      direction: direction,
    });
  };
  nextPage = () => { 
    // fetching data from ingredients
    const mealData = {
        name: this.props.router.query.name,
        image_path: this.props.router.query.image_path,
        ingredients: this.props.router.query.ingredients,
        method: this.props.router.query.method,
        author: this.props.router.query.author,
        description: this.props.router.query.description,
      };
    
    console.log(mealData);
    console.log("from snake");
    this.props.router.push({pathname: "/cook",
      query: {
          name: mealData.name,
          image_path: mealData.image_path,
          ingredients: mealData.ingredients,
          method: mealData.method,
          author: mealData.author,
          description: mealData.description,
      },})
  }
  


  render() {
    const displayRows = this.state.rows.map((row, i) =>
      row.map((value, j) => {
        //if food then display grandma image, if not then display grid-item
        return value === "food" ? (
          <div name={`${i}=${j}`} className={value}>
            <img src={img.src} alt="old" />
          </div>
        ) : (
          <div name={`${i}=${j}`} className={value} />
        );
      })
    );
    
    return (
      <div className="a">
        <h1>Are you human??</h1>
        <h1>obtain a score of ___ or higher to proceed</h1>
        <div className="snake-container">
          <div className="grid">{displayRows}</div>
        </div>
        {
          score >= 0 && 
          <button className="bg-pink-400 text-white font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl" onClick={(e) => this.nextPage()}>Go to cook</button>
            
        }
        
      </div>
    );
  }
})
