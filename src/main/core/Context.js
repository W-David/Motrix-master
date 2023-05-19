import { getAria2BinPath, getAria2ConfPath, getEnginePath, getLogPath, getSessionPath } from '../utils'
import logger from './Logger'

const { platform, arch } = process

export default class Context {
  constructor() {
    this.init()
  }

  init() {
    // The key of Context cannot be the same as that of userConfig and systemConfig.
    this.context = {
      platform: platform,
      arch: arch,
      'log-path': getLogPath(),
      'session-path': getSessionPath(),
      'engine-path': getEnginePath(platform, arch),
      'aria2-bin-path': getAria2BinPath(platform, arch),
      'aria2-conf-path': getAria2ConfPath(platform, arch)
    }

    logger.info('[Motrix] Context.init===>', this.context)
  }

  get(key) {
    if (typeof key === 'undefined') {
      return this.context
    }

    return this.context[key]
  }
}
