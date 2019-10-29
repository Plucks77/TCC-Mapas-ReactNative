import React, {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import avatar from "../../../assets/avatar.png";
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Imagem, Principal, Nome, Texto, Campos, BotaoAlterar, ViewBotao } from "./style";

export default function Perfil() {

  const [user, setUser] = useState({});
  const [user_id, setUser_id] = useState(0);
  
  useEffect(() => {    
    handleUser();
  }, []);

  async function handleUser(){

    AsyncStorage.getItem("user_id").then(id =>{
      var config = {
        headers: {'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcyMzUxNjk0LCJleHAiOjE1NzI0MzgwOTR9.-_AzvZ6GnX74_ZrZgg7_nwjOzdVtl3oJY1QfpSX6dqo"}
    };
    
    var bodyParameters = {
       key: "value"
    }

      const response =  api.post(`/usuario/${id}`,bodyParameters, config).then(r => { 
        console.log(r.data)
      })
      .catch(error => {
          console.log(error.response)
      });

    });

    // console.log(user_id);

    //   var config = {
    //     headers: {'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcyMzUxNjk0LCJleHAiOjE1NzI0MzgwOTR9.-_AzvZ6GnX74_ZrZgg7_nwjOzdVtl3oJY1QfpSX6dqo"}
    // };
    
    // var bodyParameters = {
    //    key: "value"
    // }

      // const response = await api.post(`/usuario/${userid}`,bodyParameters, config).then(r => { 
      //   console.log(r.data)
      // })
      // .catch(error => {
      //     console.log(error.response)
      // });
  }

  return (
    <Container>
      <Principal>
        <Imagem source={avatar} />
        <Nome>Pedro Lucas</Nome>
      </Principal>
      <Campos>
        <Texto>pedro_leoti@hotmail.com</Texto>        
        <Texto>Plucks77</Texto>
      </Campos>
      <ViewBotao>
      <BotaoAlterar>
        <Text>Alterar senha</Text>
      </BotaoAlterar>
      </ViewBotao>
    </Container>
  );
}
