import express from 'express';
import * as coffeeController from '../controllers/coffee_controller';
import {coffeeLoverController} from '../controllers/coffeelover_controller';
import * as teaController from '../controllers/tea_controller';

export const router = express.Router();
router.get('/coffee', coffeeController.getCoffee);
router.get('/coffeelover', coffeeLoverController);
router.get('/tea', teaController.getTea);