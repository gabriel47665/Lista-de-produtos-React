import { Button, ContainerScroll, Header, Row, TextH4, TextInput, } from "../../theme";
import 'boxicons';
import { useContext, useState } from 'react'
import Title from "../Title";
import Alert from "../Alert";
import { LoginContext } from "../../App";


const Lista = () => {

    const [lista, setLista] = useState([]);
    const [item, setItem] = useState('');
    const {alerta, setAlerta} = useContext(LoginContext);

    const inserirItem = () => {
        let empty = item === '';
        let exist = lista.find(cadaItem => cadaItem === item);
        if(empty){
            setAlerta({titulo:"Alerta", message:"Digite algo para salvar", active: true});
            return;
        }
        if(exist){
            setAlerta({titulo:"Alerta", message:"Este item já existe!", active: true});
            return;
        }
        setLista([...lista, item]); 
        setItem('');
    }

    const deletarItem = (produto) => {
        setLista(lista.filter(cadaProduto => cadaProduto != produto));
    }

    return(
        <> 
            <Header>
                <Title titulo="Lista de Compras" />
                <Row>
                    <TextInput 
                    className="w100" 
                    type="text" 
                    value={item}
                    placeholder="Digite o nome do produto" 
                    onChange={(i) => setItem(i.target.value)}/>
                    <Button className="outlined" onClick={inserirItem}>
                        <box-icon name="plus-circle" color="white"></box-icon>
                    </Button>
                </Row>
            </Header>
            
            <ContainerScroll>
                {
                    lista.map((item, key) => (
                        <Row key={key} className="list-item">
                            <TextH4>{item}</TextH4>
                            <Button onClick= {() =>deletarItem(item)}>
                                <box-icon name="trash" color="white"></box-icon>
                            </Button>
                        </Row>
                    ))
                }
            </ContainerScroll>

            <Alert titulo={alerta.titulo} message={alerta.message} active={alerta.active}/>

        </>
    )
} 

export default Lista;