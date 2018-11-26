const express = require('express');
const bodyParser = require('body-parser');

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const app = express();