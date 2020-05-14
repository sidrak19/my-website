import * as React from 'react';
import { clearWater } from '../ColorUtils';
import './Background.css';

interface IState {
  els: Array<React.ReactNode>;
}

interface IPoint {
  x: number,
  y: number,
  parent?: DirectionEnum,
}

enum DirectionEnum {
  TOP = 0,
  TOP_RIGHT = 1,
  TOP_LEFT = 2,
  BOTTOM_RIGHT = 3,
  BOTTOM_LEFT = 4,
  BOTTOM = 5,
  RIGHT = 6,
  LEFT = 7,
}

export class Background extends React.Component<{}, IState> {
  private static DIST = 50;
  

  constructor(props: {}) {
    super(props);

    this.state = {
      els: [],
    };
  }

  componentDidMount() {
    this._drawBackground();

    window.addEventListener('resize', () => {
      this.setState({
        els: [],
      });
      this._drawBackground();
    });
  }

  render() {
    return <svg className="svg-background">
      {this.state.els}
    </svg>;
  }

  private _drawBackground(): void {
    const linesGenerator = this._getNewLines();
  
    const interval = setInterval(() => {
      const nextLines = linesGenerator.next().value;
      if (!nextLines) {
        clearInterval(interval);
        return;
      }
      this.setState({
        els: [...this.state.els, ...nextLines],
      });
    }, 100);
  }

  private *_getNewLines(): Generator<Array<React.ReactNode>> {
    const points = this._getSeedPoints();
    const visited: Set<string> = new Set();

    while(points.length > 0) {
      const lines: Array<React.ReactNode> = [];

      const currPointsCount = points.length;
      for(let i = 0; i < currPointsCount; i++) {        
        const point = points.shift();
        if (visited.has(this._getPointKey(point))) {
          continue;
        }
        visited.add(this._getPointKey(point));
        if (point && this._isPointValid(point)) {
          const neighbors = this._getRandomNeighbors(point).filter(neighbor => !visited.has(this._getPointKey(neighbor)));
          lines.push(...(neighbors.map(neighbor => <line
            key={`${this._getPointKey(point)}${this._getPointKey(neighbor)}`}
            className="back-line"
            x1={`${point.x}px`}
            y1={`${point.y}px`}
            x2={`${neighbor.x}px`}
            y2={`${neighbor.y}px`}
            stroke={clearWater}
            strokeWidth="5px"
          />)));
          points.push(...neighbors);
        }
      }

      yield lines;
    }
  }

  private _isPointValid(point: IPoint): boolean {
    const { innerHeight, innerWidth } = window;
    return !(point.x < 0 || point.y < 0 || point.x > innerWidth || point.y > innerHeight);
  }

  private _getPointKey(point?: IPoint): string {
    return `${point?.x},${point?.y}`;
  }

  private _getRandomNeighbors(point: IPoint): Array<IPoint> {
    const directions = this._getRandomDirections(point.parent);
    return directions.map(direction => {
      switch (direction) {
        case DirectionEnum.TOP:
          return {
            x: point.x,
            y: point.y - Background.DIST,
            parent: DirectionEnum.BOTTOM,
          };
        case DirectionEnum.TOP_LEFT:
          return {
            x: point.x - Background.DIST,
            y: point.y - Background.DIST,
            parent: DirectionEnum.BOTTOM_RIGHT,
          };
        case DirectionEnum.TOP_RIGHT:
          return {
            x: point.x + Background.DIST,
            y: point.y - Background.DIST,
            parent: DirectionEnum.BOTTOM_LEFT,
          };
        case DirectionEnum.BOTTOM:
          return {
            x: point.x,
            y: point.y + Background.DIST,
            parent: DirectionEnum.TOP,
          };
        case DirectionEnum.BOTTOM_LEFT:
          return {
            x: point.x - Background.DIST,
            y: point.y + Background.DIST,
            parent: DirectionEnum.TOP_RIGHT,
          };
        case DirectionEnum.BOTTOM_RIGHT:
          return {
            x: point.x + Background.DIST,
            y: point.y + Background.DIST,
            parent: DirectionEnum.TOP_LEFT,
          };
        case DirectionEnum.LEFT:
          return {
            x: point.x - Background.DIST,
            y: point.y,
            parent: DirectionEnum.TOP_LEFT,
          };
        case DirectionEnum.RIGHT:
          return {
            x: point.x + Background.DIST,
            y: point.y,
            parent: DirectionEnum.TOP_LEFT,
          };
        default:
          return {
            x: point.x,
            y: point.y,
          };
      }
    });
  }

  private _getRandomDirections(incoming?: DirectionEnum): Array<DirectionEnum> {
    const array = [
      DirectionEnum.TOP,
      DirectionEnum.TOP_RIGHT,
      DirectionEnum.TOP_LEFT,
      DirectionEnum.BOTTOM,
      DirectionEnum.BOTTOM_LEFT,
      DirectionEnum.BOTTOM_RIGHT,
      DirectionEnum.LEFT,
      DirectionEnum.RIGHT,
    ].filter(direction => direction !== incoming);

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array.slice(incoming ? 4 : 5);
  }

  private _getSeedPoints(): Array<IPoint> {
    const { innerHeight, innerWidth } = window;

    const startingPoints: Array<IPoint> = [];

    for (let x = 100; x < innerWidth; x += 500) {
      for (let y = 100; y < innerHeight; y += 500) {
        startingPoints.push({
          x,
          y,
        });
      }
    }

    return startingPoints;
  }
};
