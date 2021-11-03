import React from 'react';
import './index.css'
import { FaArrowLeft } from "react-icons/fa"
import { AiOutlineArrowLeft,AiOutlinePrinter } from "react-icons/ai"
import { Text,HStack,Button } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"

export default function App(){
    const history = useHistory()
    const goBack=()=>{
        try{
        history.goBack()
        }
        catch{}
    }
    const printpage=()=>{
        window.print()
    }
    return(
        <>
            <div className="pp-head">
                    <Button _hover={{cursor:"pointer"}} backgroundColor="transparent" onClick={goBack} padding="0" size="xs"><AiOutlineArrowLeft size="100%" color="white"/></Button>
                    <Text fontSize="md" color="white" fontWeight="600">Terms and Conditions</Text>
                    <Button _hover={{cursor:"pointer"}} backgroundColor="transparent" onClick={printpage} padding="0" size="xs"><AiOutlinePrinter size="100%" color="white"/></Button>
            </div>
            <div className="pp-body">
                <p class="tc-body-title">Terms and Conditions</p>
                <p class="tc-body-title">Last revised: 10th August 2021</p>
                <br />
                <p class="tc-body-title">1. Lorem, ipsum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Commodi nemo totam officia natus sint cum labore. Commodi recusandae, debitis dolor veniam nemo
                 voluptate corrupti iste odit, possimus accusantium ab ratione libero porro iusto quibusdam tenetur
                  delectus omnis ipsum nostrum, reprehenderit nulla nobis necessitatibus! Tempora dignissimos quia 
                  soluta maxime quas, aspernatur possimus omnis quod quaerat provident quam error nemo dolore 
                  consequatur saepe, sit nesciunt. Molestiae sed quis consequatur illum nisi impedit est et dignissimos,
                   explicabo aliquid! Delectus earum quos laboriosam dolorum quo aliquid odio error, corrupti fugit 
                   ratione tempora aspernatur. Fuga architecto assumenda excepturi et magni inventore libero voluptate
                    nobis fugit?</p>
                    <br />
                <p class="tc-body-title">2. Lorem, ipsum.</p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, saepe perferendis, quasi modi
                     dolorum magnam porro odio reiciendis alias tempore dicta aut. Obcaecati assumenda dicta dolore
                      ad corrupti laudantium ipsum fuga maiores laborum recusandae. Praesentium doloribus, accusamus 
                      voluptates modi id saepe repudiandae excepturi iure quos nulla maxime tenetur aspernatur, 
                      suscipit explicabo magnam voluptas quasi illum voluptatem necessitatibus delectus soluta labore
                       ab unde. Vitae delectus excepturi mollitia autem eius quam accusamus itaque nisi cupiditate 
                       dolores quod fuga, id deleniti minima corrupti qui adipisci nulla cum voluptatem rem! Repellendus 
                       exercitationem aperiam tempora perspiciatis porro qui eaque reiciendis. Doloribus beatae ullam 
                       illo consectetur, architecto laudantium esse consequatur mollitia. Amet quasi totam voluptate 
                       unde atque, est vero illum asperiores soluta beatae, in ullam saepe, doloremque consequatur 
                       excepturi dolor molestias dolorem nulla a assumenda commodi quaerat ipsa quis qui? Odio adipisci
                        et voluptas sed vitae harum officiis sapiente reiciendis nostrum aperiam, quibusdam in suscipit
                         esse quisquam corrupti exercitationem eaque ipsam iure repellendus voluptatum, id fugiat veniam
                          blanditiis porro! A at quam modi assumenda, pariatur ratione reprehenderit, molestias officiis
                           voluptas harum tenetur. Quos illum repellat quae ut blanditiis voluptate dolores ipsa 
                           consectetur? Ex porro error, saepe sapiente, asperiores eius ipsum qui voluptatum rem 
                           recusandae sit officiis!
                </p>

            </div>
        </>
    )
}