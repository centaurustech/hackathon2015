package com.misys.crowdfunding.service.impl;

import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.misys.crowdfunding.service.api.IProjectService;
import com.trmsys.cargo.extender.Module;
import org.javabits.yar.guice.AbstractRegistryModule;

/**
 * Created by kdeveloper on 9/21/15.
 */
@Module
public class RegistryModule extends AbstractRegistryModule {
    @Override
    protected void configureRegistry() {
        register(IProjectService.class).to(ProjectService.class);

        bind(IProjectDAO.class).toRegistry();
    }
}
