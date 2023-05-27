import { Button, ContainerScroll, Row, TextH4, TextInput } from "../../theme";
import 'boxicons';
import { useState } from 'react'


const Lista = () => {

    const [lista, setLista] = useState([]);
    const [item, setItem] = useState('');

    const deletarItem = (produto) => {
        setLista(lista.filter(cadaProduto => cadaProduto != produto));
    }

    return(
        <> 
            <Row>
                <TextInput 
                className="w100" 
                type="text" 
                value={item}
                placeholder="Digite o nome do produto" 
                onChange={(i) => setItem(i.target.value)}/>
                <Button className="outlined" onClick={() => {setLista([...lista, item]); setItem('');}}>
                    <box-icon name="plus-circle" color="blueviolet"></box-icon>
                </Button>
            </Row>
            
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
        </>
    )
} 

export default Lista;