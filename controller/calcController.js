exports.calculateBenefits = (req, res) => {
    const { age, premium, policyType } = req.body;

    const benefit = (premium * 12 * (65 - age)) * (policyType === 'term' ? 1.2 : 1.5);

    res.json({ projectedBenefit: benefit });
};
