#!/usr/bin/env node
import sc from 'subcommander'
import zips from './zips'

const buildCmd = sc.command(`build`, {
		desc: `Build location JSON files`,
		callback: zips,
	})
	.option(`path`, {
		abbr: `P`,
		desc: `Output path`,
	})
	.option(`minimum-digits`, {
		abbr: `M`,
		desc: `Minimum number of partial digits`,
	})

sc.parse()