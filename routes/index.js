const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Points = mongoose.model('Points');
const { check, validationResult } = require('express-validator');


//PONTO GET
router.get('/', (req, res) => {
	console.log(req.body);
	res.render('form', {title: 'Cadastro de pontos'});
});

//PARAMETRO GET
router.get('/parameters/:id', (req, res) =>{
	req.params.id
    res.render('form-parameters', {title: 'Cadastro de Parametros'})
})

//TODOS GET
router.get('/points', (req, res) => {
	Points.find()
    .then((points) => {
      res.render('index', { title: 'todos os pontos cadastrados', points});
    })
    .catch((e) => { res.send('Sorry! Something went wrong.'+e); });
});

//PONTO POST
router.post('/parameters/:id',[
    check('name')
      	.isLength({ min: 5 })
      	.withMessage('Informe um nome com mais de cinco digitos'),
    check('latitude')
      	.notEmpty()
		.isNumeric()
      	.withMessage('Informe a cordenada x'),
	check('longitude')
		.notEmpty()
		.isNumeric()
		.withMessage('Informe a cordenada y'),
  ], (req, res) => {
		const errors = validationResult(req);
    	if (errors.isEmpty()) {
		const points = new Points(req.body);
		points.save()
    		.then(() => { res.rend('form', {title: 'points Register'}); })
    		.catch((err) => {
      		console.log(err);
      		res.send('Ponto cadastrado com sucesso!');
    		}); 
    	} else {
      		res.render('form', {
        	title: 'Cadastra ponto',
        	errors: errors.array(),
        	data: req.body,
      });
    }
});

//PARAMETRO POST 

router.post('/',[
    check('Parâmetro')
      	.isLength({ min: 5 })
      	.withMessage('Informe um nome com mais de cinco digitos'),
    check('Valor')
      	.notEmpty()
		.isNumeric()
      	.withMessage('Informe o valor do parâmetro!'),
	check('longitude')
		.notEmpty()
		.isNumeric()
		.withMessage('Informe a data da coleta!'),
  ], (req, res) => {
		const errors = validationResult(req);
    	if (errors.isEmpty()) {
		const points = new Points(req.body);
		points.save()
    		.then(() => { res.rend('form', {title: 'parameters Register'}); })
    		.catch((err) => {
      		console.log(err);
      		res.send('Parametro cadastrado com sucesso!');
    		}); 
    	} else {
      		res.render('form', {
        	title: 'Cadastra Parâmetro',
        	errors: errors.array(),
        	data: req.body,
      });
    }
});






// router.post('/ads',[
// 	check('client')
//                 .isLength({ min: 1 })
// 		.optional({nullable: true})
//                 .withMessage('Please enter a start date with format YYYY-mm-dd'),
// 	check('start_date')
//                 .isDate()
// 		.optional({nullable: true})
//                 .withMessage('Please enter a start date with format YYYY-mm-dd'),
// 	check('end_date')
//                 .isDate()
// 		.optional({nullable: true})
//                 .withMessage('Please enter a start date with format YYYY-mm-dd')
// ], (req, res) => {
// 	const errors = validationResult(req);

//         if (errors.isEmpty()) {
// 	console.error(req.body)	
// 	Points.find({client : req.body.Client})
//     		.then((ads) => {
//       		res.render('index', { title: 'Listing Ads', ads, calculadora});
//     	})
//     	.catch((e) => { res.send('Sorry! Something went wrong.'+e); });

// 	}
// 	else{
// 		res.render('index', {
//                 title: 'calculadora',
//                 errors: errors.array(),
//                 data: req.body
// 	});
// 	}
// });

module.exports = router;
