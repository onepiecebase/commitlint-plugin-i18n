import path from 'path'
import { promisify } from 'util'
import { exec, ExecOptions } from 'child_process'

const commitlint = async (message: string, configfile: string = 'commitlint.config.js') => {
  const cwd = path.join(__dirname, '../../')
  const config = path.isAbsolute(configfile) ? configfile : path.join(cwd, configfile)

  // console.log(config)
  // console.log(path.relative(cwd, config))

  const command = `echo \"${message}\" | commitlint --config ${path.relative(cwd, config)}`
  const options: ExecOptions = { cwd }
  const { stdout } = await promisify(exec)(command, options)
  return stdout
}

export default commitlint
