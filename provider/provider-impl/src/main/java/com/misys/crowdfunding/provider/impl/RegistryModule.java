package com.misys.crowdfunding.provider.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.trmsys.cargo.extender.Module;
import org.javabits.yar.guice.AbstractRegistryModule;

/**
 * Created by kdeveloper on 9/21/15.
 */
@Module
public class RegistryModule extends AbstractRegistryModule {
    @Override
    protected void configureRegistry() {
        register(IProjectDAO.class).to(ProjectDAO.class);
    }
}
