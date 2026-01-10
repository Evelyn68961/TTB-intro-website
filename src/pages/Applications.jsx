import './Applications.css';
import StatinsPrimary from './applications/StatinsPrimary';
import Bisphosphonates from './applications/Bisphosphonates';
import IntensiveBP from './applications/IntensiveBP';
import SGLT2i from './applications/SGLT2i';
import Colchicine from './applications/Colchicine';

function Applications() {
  return (
    <div className="applications-page">
      <header className="page-header">
        <h1>Clinical Applications</h1>
        <p className="subtitle">
          TTB estimates from published research to guide clinical decision-making
        </p>
      </header>

      <main className="applications-content">
        <StatinsPrimary />       {/* Yourman 2021 */}
        <Bisphosphonates />      {/* Deardorff 2022 */}
        <IntensiveBP />          {/* Chen 2022 */}
        <SGLT2i />               {/* Chen 2023 */}
        <Colchicine />           {/* Zhou 2024 */}

        <section className="guidance-section">
          <h2>Using TTB in Practice</h2>
          <div className="guidance-grid">
            <div className="guidance-card">
              <h3>Compare to Life Expectancy</h3>
              <p>If estimated life expectancy is shorter than TTB, carefully weigh whether to initiate therapy.</p>
            </div>
            <div className="guidance-card">
              <h3>Choose Appropriate Threshold</h3>
              <p>Higher-risk patients may use lower ARR thresholds; the choice depends on clinical context.</p>
            </div>
            <div className="guidance-card">
              <h3>Shared Decision-Making</h3>
              <p>Use TTB estimates to have transparent conversations with patients about treatment timing.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Applications;