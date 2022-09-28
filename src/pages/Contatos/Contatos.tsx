import React from 'react';
import './style.css';
export const Contatos = () => {
    return (
        <div className='body'>
            <h1 className='select'>CONTATOS</h1>
            <br /><br />
            <h2 className='aviso'>
                Para entrar em contato comigo, preencha este "form" corretamente.
            </h2>
            <fieldset className='bordinha'>
                <div className='formin'>
                    <form>
                        <br />
                        <label>Nome Completo</label>
                        <br />
                        <input type="text" placeholder='Ex: João Lima Alexandre' />
                        <br /><br />
                        <label>E-mail</label>
                        <br />
                        <input type="email" placeholder='Ex: user@gmail.com' />
                        <br /><br />
                        <label>Mensagem</label>
                        <br />
                        <textarea rows={3} cols={30} placeholder='Digite sua mensagem aqui'></textarea>
                        <br /><br />
                        <button type="submit" className='botao'>Enviar</button>
                        <button type="reset" className='botao'>Limpar</button>
                        <br /><br />
                    </form>
                </div>
            </fieldset>
            <br /><br /><br />
            <h2 className='aviso'>Se quiser, também pode acessar minhas redes
                sociais para entrar em contato (encontram-se no fim de cada página).
            </h2>
        </div>
    );
};