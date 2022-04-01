import { MouseEventHandler } from "react";
import styled from "styled-components";

export const Utilities = {
    colors: {
    clr_primary1: "#453227",
    clr_primary2: "#5f4435",
    clr_primary3: "#795744",
    clr_primary4: "#936a53",
    clr_primary5: "#ab7a5f",
    clr_primary6: "#b99179",
    clr_primary7: "#c5a491",
    clr_primary8: "#d1b6a8",
    clr_primary9: "#decbc0",
    
    clr_grey1: "#102a42",
    clr_grey2: "#243a52",
    clr_grey3: "#324d67",
    clr_grey4: "#48647f",
    clr_grey5: "#617d98",
    clr_grey6: "#829ab0",
    clr_grey7: "#9eb2c7",
    clr_grey8: "#bcccdc",
    clr_grey9: "#dae2ec",
    clr_grey10: "#f1f5f8",
    clr_white: "#fff",
    clr_red_dark: "#bb2525",
    clr_red_light: "#e66b6b",
    clr_green_dark: "#25bb32",
    clr_green_light: "#6be675",
    clr_black: "#222"
    },

    fonts:{
    xxlg_font_size: "3rem",
    xlg_font_size: "2.5rem",
    lg_font_size: "2rem",
    md_font_size: "1.25rem",
    sm_font_size: "1rem",
    },

    


}

interface ButtonProps{
    width?:string;
    // type?:string;
    height?:number;
    borderRadius?:number;
    marginTop?:string;
    margin?:string;
    color:string;
    className?:string;
    bgColor:string;
    type?: "button" | "submit" | "reset";
    padding?:string;
    fontSize?:string;
    uppercase?:string;
    onClickBtn?: () =>  MouseEventHandler<HTMLButtonElement> | undefined
    children:JSX.Element | JSX.Element[] | string;
}

const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.bgColor ? props.bgColor : "palevioletred"};
  color: ${props => props.color ? "white" : "palevioletred"};
  margin: ${props=> props.margin ? props.margin : ""} !important;
  font-size: ${props => props.fontSize ? props.fontSize : "1rem"} !important;
  border:none;
  margin-top: ${props => props.marginTop ? props.marginTop : '0'} !important;
  width: ${props=>props.width && props.width};
  padding: ${props => props.padding ? props.padding : " 5px 10px"};
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};
  cursor:pointer;
  border-radius: 3px;
`;

export const ButtonWrapper:React.FC<ButtonProps> = ({onClickBtn,type,bgColor,color,borderRadius,
    height,
    width,
    children,
    fontSize,
    marginTop,
    uppercase,
    padding,
    className,
    margin}) =>{
    return <Button 
    padding={padding} 
    marginTop={marginTop} 
    bgColor={bgColor} 
    color={color} 
    borderRadius={borderRadius} 
    height={height} 
    width={width}
    uppercase={uppercase}
    fontSize={fontSize}
    margin={margin}
    className={className}
    type={type}
    onClick={onClickBtn}
    >
        {children}
    </Button>
}