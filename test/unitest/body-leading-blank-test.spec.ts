import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import commitlint from '@unitest/share/commitlint.mock'

chai.use(chaiAsPromised)

const expect = chai.expect

describe('测试 body-leading-blank 配置', () => {
  it('能返回中文错误信息', async () => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    process.env.commitlint_plugin_i18n = 'zh-CN'

    const config = 'test/unitest/body-leading-blank-test.config.js'

    const rejection = await expect(commitlint('build(): test\nbody', config)).to.be.rejected
    expect(rejection.stdout).to.be.match(/[\u4e00-\u9fa5]/)

    await expect(commitlint('build(): test\n\nbody', config)).not.to.be.rejected
    await expect(commitlint('build(): test\n\nbodyss', config)).not.to.be.rejected
  })
})
