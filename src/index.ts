/* eslint-disable valid-jsdoc */
import dotenv from 'dotenv'

import { BaseOptions, Query } from './types'
import { Base } from './Base'
import { Schema } from './Schema'

dotenv.config()

export {
	Base,
	Schema,
	BaseOptions,
	Query
}