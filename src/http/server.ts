import fastify from "fastify";
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";

const app = fastify()

app.register(cookie, {
  secret: "oauisd-ainiasd-25asd-156aw4d-v15s6",
  hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({port: 3333}).then(() => {
  console.log('HTTP server running!')
})