import livro from "../models/Livro.js"
import axios from "axios";

class LivroController {
    // static async getForecast( req, res) {
    //     const city = req.params.city;

    //     try {
    //         axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KET}&q=${city}&days=1&aqi=no&alerts=no`)
    //         .then(function (response) {
    //             res.status(200).json(response.data);
    //         })
            
    //     } catch(erro) {
    //         res.status(500).json({ message: `${erro.message} - falha ao recuperar livros`});
    //     }
    // }

    static async listarLivros( req, res) {
        
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao recuperar livros`});
        }
    }

    static async listarLivroPorId( req, res) {
        
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao recuperar livro`});
        }
    }

    static async cadastrarLivro( req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({message: "criado com sucesso", livro:  novoLivro});
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro`});
        }
    }

    static async atualizarLivroPorId( req, res) {
        
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado"});
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização`});
        }
    }

    static async excluirLivroPorId( req, res) {
        
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro excluido"});
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão`});
        }
    }
};

export default LivroController;