//Default import
import person from './person.js'
import prs from './person.js'

//Named import, name is defined by export
import { baseData } from './utility.js';
import { clean } from './utility.js';

//import javascript object which exposes all constants and whatever i export in the other file as properties
import * as bundled from './utility'

