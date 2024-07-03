import { APPS } from "../../Modules/AppModules/App.js";

export const HOMEPAGE=()=>{

    HEADERWIDGET(
        `

            <header>

                <input class='HomeSearch' placeholder='Search For App' />

                <img class='rightIcon' src='${WHITEICONS}user.png'/>

            </header>

        `,
        ``,'HomeDiv'
    );

    DECLARATION('#HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);
        
        REDUX(APPS,(data)=>{
            
            const AppHolder=document.createElement('div');

            AppHolder.classList.add('AppHolder');

            DISPLAY(AppHolder,
                `

                    <img class='AppIcons' src='${WHITEICONS+data.Icons}.png'/>

                    <h1 class='Names'>${data.Name}</h1>

                    <button class='Install'>Install</button>
                
                `
            );

            ADD(ELEMENT,AppHolder);

            EVENT(AppHolder,'click',()=>{

                open('https://e-corpcompanygroup.github.io/E-corp-Store/Modules/Apps/'+data.App);

            })

        });

    });

};