import styled from 'styled-components';
import { Utilities } from '../styled/Utils';

export const SignupContainer = styled.section`
    display:grid;
   
    min-height:73vh;
    justify-content:center;
    align-content:flex-start;
    // background-color:red;
    // border: 1px solid ${Utilities.colors.clr_grey10};
    border-radius:10px;
    width:30%;
    margin: 2rem auto;

    h1{
        text-align:center;
        margin-bottom:2rem;
        font-size: ${Utilities.fonts.lg_font_size};
    }

    form{
        border: 1px solid #d5d5d5;
        padding:2rem;
        border-radius:5px;
        box-shadow: 1px 1px 5px 5px rgba(0, 0,0, 20%);

        .form-group{
            // background-color:green;
            min-height:100px;
            min-width:500px;
            
            display:flex;
            flex-direction:column;
            
            label{
                margin-bottom:.5rem;
                font-size:1.1rem;
            }
    
            .form-control{
                padding:10px 5px;
                outline:none;
                border: 1px solid #d5d5d5;
                border-radius:5px;
                font-size:1.2rem;
            }
            span{
                font-size:12px;
                padding:3px;
                color: red;
                display:none;
            }
            .form-control:invalid[focused="true"]{
                border: 1px solid red;
            }
            .form-control:invalid[focused="true"] ~ span{
                display:block;
            }
        }
    }
    button{
        text-align:center;
        margin-top:1rem;
    }
    .login-router{
        margin-top:1rem;
        text-align:center;
        font-size:1.3rem;

        a{
            // text-decoration:underline;
            color: blue;
        }
    }
    
    @media (max-width:992px){
        overflow: hidden;
         width: 100%;

        .form-group{
            min-width: 350px !important;
        }
    }
`