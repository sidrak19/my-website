import * as React from 'react';
import southpark from '../../static/southpark.webp';
import styled from 'styled-components';

const StyledSvg = styled.svg({
  margin: '0 16px',
});

interface IState {
  loaded: boolean;
}

export class Avatar extends React.Component<{}, IState> {
  private imgWidth: number = 240;
  private imgHeight: number = 317.13;
  private R: number = 15;
  private r: number = 3.5;
  private cy: number = 142;
  private leftCx: number = 102;
  private rightCx: number = 145;

  private width!: number;
  private eyesArea!: DOMRect;
  private leftPupil!: HTMLElement;
  private leftEye!: HTMLElement;
  private leftCenterX!: number;
  private leftCenterY!: number;
  private rightPupil!: HTMLElement;
  private rightEye!: HTMLElement;
  private rightCenterX!: number;
  private rightCenterY!: number;

  constructor(props: {}) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidUpdate(): void {
    if (this.state.loaded) {
      this._initEyes();
    }
  }

  render() {
    return (
      <StyledSvg
        width={this.imgWidth}
        height={this.imgHeight}
        aria-labelledby="avatarTitle avatarDesc"
        role="img"
      >
        <title id="avatarTitle">Siddharth Rakesh</title>
        <desc id="avatarDesc">
          Siddharth Rakesh's Avatar, whose eyes follow the mouse cursor or finger touch.
        </desc>
        <image
          href={southpark}
          width={this.imgWidth}
          onLoad={() => {
            this.setState({
              loaded: true,
            });
          }}
        />
        {this.state.loaded && (
          <g className="eyes">
            <g className="left-eye">
              <circle
                cx={this.leftCx}
                cy={this.cy}
                r={this.R}
                fill="transparent"
                className="left-eyeball"
              />
              <circle
                cx={this.leftCx}
                cy={this.cy}
                r={this.r}
                fill="black"
                className="left-pupil"
              />
            </g>
            <g className="right-eye">
              <circle
                cx={this.rightCx}
                cy={this.cy}
                r={this.R}
                fill="transparent"
                className="right-eyeball"
              />
              <circle
                cx={this.rightCx}
                cy={this.cy}
                r={this.r}
                fill="black"
                className="right-pupil"
              />
            </g>
          </g>
        )}
      </StyledSvg>
    );
  }

  private _initEyes(): void {
    this._setEyeElements();

    document.addEventListener(
      'mousemove',
      (e: MouseEvent) => {
        this._positionEyes(e.pageX, e.pageY);
      },
      false
    );

    document.addEventListener(
      'touchmove',
      (e) => {
        if (e.touches?.[0]) {
          this._positionEyes(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      false
    );

    window.addEventListener('resize', () => {
      if (this.width > 768 || this.width !== window.innerWidth) {
        this._setEyeElements();
      }
    });
  }

  private _setEyeElements(): void {
    this._setWidth();
    this.eyesArea = document.querySelector(".eyes")!.getBoundingClientRect();

    this.leftPupil = document.querySelector(".left-pupil")! as HTMLElement;
    this.leftEye = document.querySelector(".left-eye")! as HTMLElement;
    const leftEyeArea = document.querySelector(".left-eyeball")!.getBoundingClientRect();
    this.leftCenterX = leftEyeArea.left + this.R;
    this.leftCenterY = leftEyeArea.top + this.R;
    this.leftEye.style.transformOrigin = `${this.leftCx}px ${this.cy}px`;

    this.rightPupil = document.querySelector(".right-pupil")! as HTMLElement;
    this.rightEye = document.querySelector(".right-eye")! as HTMLElement;
    const rightEyeArea = document.querySelector(".right-eyeball")!.getBoundingClientRect();
    this.rightCenterX = rightEyeArea.left + this.R;
    this.rightCenterY = rightEyeArea.top + this.R;
    this.rightEye.style.transformOrigin = `${this.rightCx}px ${this.cy}px`;
  }

  private _positionEyes(pageX: number, pageY: number): void {
    if (this.eyesArea.left < pageX && pageX < this.eyesArea.right && this.eyesArea.top < pageY && pageY < this.eyesArea.bottom) {
      this._resetEyes();
    } else {
      const leftX = pageX - this.leftCenterX;
      const leftY = pageY - this.leftCenterY;
      const leftTheta = Math.atan2(leftY, leftX);
      const leftAngle = leftTheta * 180 / Math.PI + 360;

      const rightX = pageX - this.rightCenterX;
      const rightY = pageY - this.rightCenterY;
      const rightTheta = Math.atan2(rightY, rightX);
      const rightAngle = rightTheta * 180 / Math.PI + 360;

      this.leftEye.style.transform = `rotate(${leftAngle + "deg"})`;
      this.leftPupil.style.transform = `translateX(${this.R - this.r}px)`;
      this.rightEye.style.transform = `rotate(${rightAngle + "deg"})`;
      this.rightPupil.style.transform = `translateX(${this.R - this.r}px)`;
    }
  }

  private _resetEyes(): void {
    this.leftPupil.style.transform = `translateX(0)`;
    this.rightPupil.style.transform = `translateX(0)`;
  }

  private _setWidth(): void {
    this.width = window.innerWidth;
  }
}
