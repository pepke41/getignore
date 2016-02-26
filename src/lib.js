#!/usr/bin/env node

import getGithub from './index';

(async function() {
  const result = await getGithub();
  console.log(result);
}());
