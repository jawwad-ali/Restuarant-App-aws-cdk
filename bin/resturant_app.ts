#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ResturantAppStack } from '../lib/resturant_app-stack';

const app = new cdk.App();
new ResturantAppStack(app, 'ResturantAppStack');
